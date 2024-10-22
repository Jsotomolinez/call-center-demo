import gspread
from google.oauth2.service_account import Credentials
import datetime
import re
import gspread_formatting as format

scopes = ["https://www.googleapis.com/auth/spreadsheets"]
creds = Credentials.from_service_account_file("credentials.json", scopes=scopes)
client = gspread.authorize(creds)

sheet_id = '1PmkDMziMZd0f_-S1SKaAelr14_wVSvanGmIrvQhCXyA'
work_sheet = client.open_by_key(sheet_id)

def get_count_users() -> int:
    '''Counts the number of users and returns it as a int'''
    return len(work_sheet.sheet1.col_values(2))

def get_headers() -> list:
    '''Gets de values of the first row of the spreadshhet as a list'''
    headers = work_sheet.sheet1.row_values(1)
    while '' in headers: #Para eliminar posibles llave-valor vacias
        headers.remove('')
    return headers

# def create_user(values:dict)->None:
#     '''Crea un usuario con los valores contenidos en values, los cuales debes estar en el modelo de datos UserModel creado en el archivo \model\users.py'''
#     user :dict = dict()
#     for key in values:
#         if key == 


def get_row(row: int) -> tuple[dict, str]:
    '''Gets the data from a row as a dict and the phone number to call as a str'''
    headers =  get_headers()
    row_data: list = work_sheet.sheet1.row_values(row)
    while row_data[0] == '':
        row_data.pop(0)
    values: dict = dict()
    for i in range(len(headers)):
        values[headers[i]] = row_data[i]
    return values, values[headers[0]]

def get_user(row: int) -> dict:
    '''get de data of the user from the values'''
    values, phone = get_row(row)
    calls = []
    user = {}
    for key in values:
        # print(key)
        if re.search(r'(^\d+-\d+$)', values[key]):
            call = {'date': values[key]}
        elif re.search(r'\d+:\d+', values[key]):
            call['time'] = values[key]
            calls.append(call)
            call = {}
        elif values[key]== '' and len(calls) < 3:
            calls.append({'date':'','time':''})

        else:
            user[key] = values[key]
    user['calls']= calls

    return user

def get_users(number_of_users_to_get:int, start:int = 2) -> list[dict]:
    '''Returna el numero de usarios especificados, el inicio puede ser especificado'''
    users = list()
    for i in range(start, number_of_users_to_get + start):
        users.append(get_user(i))
    return users
    

def set_state(row: int, column: int, state: str) -> None:
    '''Sets the state of a cell'''
    work_sheet.sheet1.update(row, column, state)

def print_info_for_call(data: dict) -> None:
    '''Prints the info usefull for the operator in a call'''
    print(f'"phone number": {data["phone number"]}')
    print(f'"name": {data["name"]}')
    print(f'"status": {data["status"]}')
    print(f'"addres": {data["addres"]}')
    print(f'"zip code": {data["zip"]}')

def write_time(row: int, column: int) -> None:
    '''Writes the current time in UTC in a cell'''
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    work_sheet.sheet1.update_cell(row, column, now_utc.strftime("%H:%M"))

def write_date(row: int, column: int) -> None:
    '''Writes the current date in UTC in a cell'''
    now_utc = datetime.datetime.now(datetime.timezone.utc)
    work_sheet.sheet1.update_cell(row, column, now_utc.strftime("%m-%d"))
    return None

def last_call_user() -> tuple[dict, str]:
    '''Determina cual usuario se llamo por ultima vez y retorna sus datos como un diccionario y el numero telefonico como str'''
    dates = list() #Sera una lista de listas que contendra el conjunto de datos: Fecha, hora, fila_usuario. Estos estan asociados a la ultima llamada de cada usuario
    # times = list()
    headers = get_headers()
    for i in range(2, get_count_users()+ 1): #Recorre cada usuario
        values, number = get_row(i)
        # print(values)
        #VULNERABLE A ERRORES! SE SUGIERE TOMAR PRECAUCIONES
        if values['3rd call'] and values['time 3']:
            dates.append([values["3rd call"], values["time 3"], i])
        elif values['2nd call'] and values['time 2']:
            dates.append([values["2nd call"], values["time 2"], i])
        elif values['1st call'] and values['time 1']:
            dates.append([values['1st call'], values["time 1"], i])
    dates.sort(reverse= True)
    row_user = dates[0][2]
    return get_row(row_user)
    
def get_row_user(values: dict) -> int:
    '''Retorna el numero de la fila que contiene al usuario en la hoja de calculo, es la funcion inversa de get_row()'''
    headers = get_headers()
    cell = work_sheet.sheet1.find(values[headers[0]])
    return cell.row

def get_col_header(header: str) -> int:
    '''Retorna el numero de la columna en el que se encuentra el encabezado 'header' dentro de la hoja de calculo'''
    cell = work_sheet.sheet1.find(header)
    return cell.col

def save_call(values: dict, status: str) -> dict:
    '''Guarda los datos de una llamada que se haya realizado se necesita como parametro los datos del usuario (values) y el status de la llamada, y retorna la misma variable values actualizada'''
    row = get_row_user(values)
    if values['2nd call'] and values['time 2']:
        col = get_col_header('3rd call')
        write_date(row,col)
        write_time(row, col + 1)
    elif values['1st call'] and values['time 1']:
        col = get_col_header('2nd call')
        write_date(row,col)
        write_time(row, col + 1)
    else:
        col = get_col_header('1st call')
        write_date(row,col)
        write_time(row, col + 1)
    values, number = get_row(row)
    values['status'] = status
    update_user(values)
    return values

def convert_call_sp(values: dict) -> dict:
    calls = values.pop('calls')
    values['1st call'], values['time 1'] = calls[0]['date'], calls[0]['time']
    values['2nd call'], values['time 2'] =calls[1]['date'], calls[1]['time']
    values['3rd call'], values['time 3'] = calls[2]['date'], calls[2]['time']
    values = {key: values[key] for key in get_headers()}
    return values

def update_user(values: dict, row : int = None) -> None:
    headers = get_headers()
    values = convert_call_sp(values)
    
    if not row:
        row = get_row_user(values)
    col1 = get_col_header(headers[0])
    col2 = get_col_header(headers[-1])
    col1 = chr(col1 + 64)
    col2 = chr(col2 + 64)
    values = [list(values.values())]
    work_sheet.sheet1.update(values= values, range_name=f'{col1}{row}:{col2}{row}')
    return None

def get_cell_color(row: int, col : int) -> str:
	...
    # sp.format.get_effective_format(sp.work_sheet.sheet1, 'B2').backgroundColor

def formating_cells() ->None:
    '''Formatea todas las celdas, dado que consume memoria un poco mas de lo normal, se recomienda discrecion a la hora de usarse.'''
    headers = get_headers()
    row_header = 1
    last_row = get_count_users()
    cols_header = [get_col_header(headers[0]), get_col_header(headers[-1])]
    border_simple = format.Border('solid', format.Color(0,0,0))
    border_double = format.Border('double', format.Color(0,0,0))
    format_header = format.CellFormat(
        backgroundColor= format.Color(0.2196078431372549, 0.27450980392156865, 0.21568627450980393),
        horizontalAlignment='center',
        borders=format.Borders(border_double,border_double,border_double,border_double),
        textFormat=format.TextFormat(format.Color(1,1,1),'Times New Roman', 12)
    )
	
    border_right = format.CellFormat(
        borders=format.Borders(right =  border_double)
    )
    border_bottom = format.CellFormat(
        borders=format.Borders(bottom =  border_double)
    )
    border_left = format.CellFormat(
        borders=format.Borders(left =  border_double)
    )
    borders_simple = format.Borders(border_simple,border_simple,border_simple,border_simple)

    user_1 = format.CellFormat(
        backgroundColor= format.Color(0.11372549019607843, 0.9411764705882353, 0.6313725490196078),
        horizontalAlignment='right',
        borders= borders_simple,
        textFormat=format.TextFormat(format.Color(0,0,0),'Times New Roman', 11)
        )
    user_2 = format.CellFormat(
        backgroundColor= format.Color(0.16862745098039217, 0.9411764705882353, 0.11372549019607843),
        horizontalAlignment='right',
        borders= borders_simple,
        textFormat=format.TextFormat(format.Color(0,0,0),'Times New Roman', 11)
        )
    for i in range(2,last_row +1):
        if i%2 == 0:
            format.format_cell_range(work_sheet.sheet1, f'{chr(cols_header[0] + 64)}{i}:{chr(cols_header[1] + 64)}{i}', user_1)
        else:
            format.format_cell_range(work_sheet.sheet1, f'{chr(cols_header[0] + 64)}{i}:{chr(cols_header[1] + 64)}{i}', user_2)

    
    format.format_cell_ranges(work_sheet.sheet1, [
        (f'{chr(cols_header[0] + 64)}{row_header}:{chr(cols_header[1] + 64)}{row_header}', format_header),
        (f'{chr(cols_header[0] + 64)}{row_header + 1}:{chr(cols_header[0] + 64)}{last_row}', border_left),
        (f'{chr(cols_header[1] + 64)}{row_header + 1}:{chr(cols_header[1] + 64)}{last_row}', border_right),
        (f'{chr(cols_header[0] + 64)}{last_row}:{chr(cols_header[1] + 64)}{last_row}', border_bottom)
        ])

    return None

#Crear una funcion que convierta entre el tipado de la variable calls y las llamadas en la spreadsheets: convert_call_sp(values)
#Crear una funcion que extraiga el color de una celda
#crear una nueva funcion que extraiga los datos del usuario tomando en consideracion los 2 puntos anteriores
#Cear una funcion especial para la variable de notas que relacione el json con el string en bruto y viceversa
#Manejar el modelo de datos de los usuarios segun el modelo especificado en interface.ts