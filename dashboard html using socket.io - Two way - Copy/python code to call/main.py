import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

@sio.on('pythonTextInput')  # Event to receive text input from Node.js server
def handle_python_text_input(text_input):
    print('Received text input from web page:', text_input)

# state = 'Not Started'  # Comment or uncomment the desired state
# state = 'In Progress'
state = 'Complete'
# state = 'Fault'

sio.connect('http://localhost:3000')
sio.emit('stateChange', state)

sio.wait()

