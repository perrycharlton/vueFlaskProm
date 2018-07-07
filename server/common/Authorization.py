from flask import request, session, make_response, jsonify
import jwt
import datetime
from functools import wraps
from os import  environ as env


# Create token 
def auth_required():
    auth = request.json
    # store password into session checks by connection to promonitor, return true or false?
    if auth and auth['username'] == env['ADMIN_USERNAME'] and auth['password'] == env['ADMIN_PASSWORD']:

        
        # # this will be taken from a user database
        # session['username'] = {'username': auth['username'], 'access': 'admin'}
        # token = jwt.encode(
        #         {
        #             'user': auth['username'], 
        #             'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        #         }, 
        #         'SECRET_KEY'
        #     )
        # session['admin_token'] = token.decode('UTF-8')
        return jsonify({'msg': 'Token has been added to the session','username': auth['username'], 'status':True})
    return jsonify({'msg': 'Incorrect password or username', 'status':False})



def admin_logout():
    if 'username' in  session:
        # If token stored the decode it this is for test
        # jwtDecoded = jwt.decode(session['admin_token'], 'SECRET_KEY')
        # print(jwtDecoded)

        # As this is a log out the token should be removed from the session
        
        session.pop('username', None)        
        # 
        return jsonify({'msg': 'User has logged out'})

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # Check if a token is stored in the session and user is admin
        if 'username' in  session and session['username']['access'] == 'admin':
            # If token stored the decode it this is for test
            # jwtDecoded = jwt.decode(session['admin_token'], 'SECRET_KEY')
            print(session['username']['access'])     

            return f( *args, **kwargs)
        return jsonify({'status': 'Token is missing or incorrect'})
    return decorated

def prom_token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # Check if a token is stored in the session and user is admin
        if 'prom_token' in  session:
            # If token stored the decode it this is for test
            jwtDecoded = jwt.decode(session['prom_token'], 'SECRET_KEY')
            print(jwtDecoded)     

            return f( *args, **kwargs)
        # if token is missing then send message to ask user to log in
        return jsonify({'status': 'Token is missing or incorrect'})
    return decorated


def create_token(username):
    # this will be taken from a user database
    # session['username'] = {'username': username}
    token = jwt.encode(
            {
                'username':username, 
                'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
            }, 
            'SECRET_KEY'
        )
    session['prom_token'] = token.decode('UTF-8')
    return token.decode('UTF-8')
