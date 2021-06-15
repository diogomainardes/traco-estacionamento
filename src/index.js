import express from 'express';
import { activityCheckin, 
         activityCheckout, 
         listActivities, 
         removeActivity } from './controllers/activitiesController.js';
import { insertVehicles, 
         listVehicles, 
         removeVehicle, 
         updateVehicles } from './controllers/vehiclesController.js';

const app = express();

app.use(express.json());

app.get('/api/ping', (request, response) => {
    response.send({
        message: 'pong'
    })
});

/* Endpoints Vehicles */
app.get('/api/vehicles', listVehicles);
app.post('/api/vehicles', insertVehicles);
app.put('/api/vehicles/:id', updateVehicles);
app.delete('/api/vehicles/:id', removeVehicle);

/* Endpoints Activities */
app.post('/api/activities/checkin', activityCheckin);
app.put('/api/activities/checkout', activityCheckout);
app.delete('/api/activities/:id', removeActivity);
app.get('/api/activities', listActivities);

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000...");
});
