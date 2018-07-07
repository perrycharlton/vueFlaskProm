from flask import Flask, render_template, request, jsonify, session,  Response, make_response, redirect, url_for, Blueprint

from server.common import Authorization as auth
import jwt
import datetime
import os

# This will only allow access to /admin pages you can build vuejs templates seprate
admin_section= Blueprint('admin', __name__, url_prefix='/admin')

# un-secure page
@admin_section.route('/', methods=['GET'])
def index():
    return render_template('index.html')

# -----Admin Section
@admin_section.route('/', methods=['POST'])
def admin_login():    
    print(request.args.get('next'))    
    return auth.auth_required()

@admin_section.route('/', methods=['DELETE'])
@auth.token_required
def admin_logout():  
    print(request.args.get('next'))
    return auth.admin_logout()
