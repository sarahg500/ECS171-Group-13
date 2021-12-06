from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
import joblib
import numpy as np
import sys
from BasicAPI_IncomeModels import ui_api
import json

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Income Model", 
		  description = "Predict consumer based on income")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params',
				  {'income': fields.Float(required = True, 
				  							   description="income", 
    					  				 	   help="Sepal Length cannot be blank")})

classifier = joblib.load('classifier.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			prediction = ui_api(int(data[0]))
			print(prediction)
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": json.dumps(prediction)
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})