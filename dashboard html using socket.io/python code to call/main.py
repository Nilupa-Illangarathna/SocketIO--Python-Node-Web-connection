import socketio

sio = socketio.Client()

@sio.event
def connect():
    print('Connected to server')

@sio.event
def disconnect():
    print('Disconnected from server')

# state = 'Not Started'  # Set the state you want to send
state = 'In Progress'
# state = 'Complete'
# state = 'Fault'

sio.connect('http://localhost:3000')
sio.emit('stateChange', state)
sio.disconnect()
