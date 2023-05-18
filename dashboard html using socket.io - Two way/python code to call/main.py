import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

# state = 'Not Started'  # Comment or uncomment the desired state
state = 'In Progress'
# state = 'Complete'
# state = 'Fault'

sio.connect('http://localhost:3000')
sio.emit('stateChange', state)

# Additional functionality to handle text input
text_input = input("Enter text: ")
sio.emit('textInput', text_input)

sio.disconnect()
