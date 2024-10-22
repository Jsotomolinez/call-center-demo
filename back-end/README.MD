# Demo de una app para automatizar las llamdas de un call center


# Se espera:
## conseguir obtener numeros de telefono de una hoja de calculo de google
## Hacer llamadas mediante twilio
## Actualizar la hoja de calculo con la informacion pertinente
## Identificar cuando una llamada no es contestada o es enviada al buzon de voz
## Aumentar la velocidad de llamadas que puede hacer un operador de call center


# Para poder ejecutar el codigo:
## se necesita un archivo de credenciales en formato .json
## Crear y activar un entorno virtual de python con los siguientes comandos:
### python -m venv .venv
### .venv/Scripts/activate


## Luego descargar las dependencias necesarias ejecutando el siguiente comando (De preferencia hacerlo en el entorno virtual)
### pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib gspread
### pip install twilio
### pip install fastapi[all]