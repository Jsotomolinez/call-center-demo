import json
from twilio.rest import Client
from twilio.twiml.voice_response import VoiceResponse


with open("twilio_data.json", "r") as arch:
    data = json.load(arch)
    auth_token: str = data["auth_token"]
    account_sid: str = data["account_sid"]
    from_number: str = data["from_number"]


def make_call(from_number: str, to_number: str) -> None:
    client = Client(account_sid, auth_token)
    call = client.calls.create(
        url="http://demo.twilio.com/docs/voice.xml",
        to=to_number,
        from_=from_number,
    )
    print(call.sid)
    


def send_message(to_number: str)->None:
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    to=to_number,
    from_= from_number,
    body="Hello from Python!")

    print(message.sid)
    return None


# para que una operadra atienda una llamada
def voice():
    resp = VoiceResponse()
    audio = 'Hi, This is our Call center, leave a message'
    resp.say(audio, voice='female')
    resp.record()
    resp.hangup()
    return str(resp)