import spreadsheets_helper as sp

def main():
    # ve probando la ejecucion de tus funciones aquí, las puedes dejar comentadas luego de probarlas
    # headers = sp.get_headers()
    # values = sp.get_user(2)
    # print(values)
    # print()
    # values = sp.convert_call_sp(values)
    
    # print(values)
    # print(sp.get_user(values))
    # row = sp.get_count_users()
    # sp.update_user(values, row+1)
    # print(row)
    # all = sp.work_sheet.sheet1.get_all_records() #Probando imprimir todos los valores de la hoja de calculo
    # for i in all: print(i)
    # print(sp.last_call_user())#Retorna los datos del usuario que se llamo por ultima vez y su numero telefonico
    # print(sp.get_headers()) #Probando una modificacion que se le hizo a esta funcion
    # print(sp.get_row(sp.get_headers(),2)) #Probando modificacion a esta funcion
    # values = sp.save_call(values, 'Follow up') #Probando la funcion, esta devuelve la data del usuario incluida la llamada que se realizo
    # sp.formating_cells() Da formato a todas las celdas
    print(sp.get_count_users())
    # print(sp.format.get_effective_format(sp.work_sheet.sheet1, 'B2'))
    cell = sp.work_sheet.sheet1.cell(2,2)
    print(sp.format.get_user_entered_format(sp.work_sheet.sheet1, 'B2').backgroundColor)
    # sp.format.format_cell_range(sp.work_sheet.sheet1, 'B2:B2' , sp.format.CellFormat(backgroundColor= sp.format.Color(0,1,0)))
    # print(sp.format.get_effective_format(sp.work_sheet.sheet1, 'B2').backgroundColor)
    
    ...
    


if __name__ == '__main__':
    main()