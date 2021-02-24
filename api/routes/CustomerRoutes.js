module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController");

    // app.post("/register", AuthController.registerUser);
    // app.post("/login", AuthController.loginUser);
    // app.get("/user", Auth, AuthController.getUserDetails);

    app.get("/service_record/:id", [Auth, Customer], CustomerController.viewServiceRecordById);
    app.post("/create_appointment", [Auth, Customer], CustomerController.createAppointment);
    // ??? getAppointment
    app.get("/appointment/:id", [Auth, Customer], CustomerController.viewAppointmentById);
    app.post("/update_appointment/:id", [Auth, Customer], CustomerController.updateAppointment);
    app.delete("/delete_appointment", [Auth, Customer], CustomerController.deleteAppointment);
    app.post("/create_vehicle", [Auth, Customer], CustomerController.createVehicle);
    // ??? getVehiclet
    app.get("/vehicle/:id", [Auth, Customer], CustomerController.viewVehicleById);
    app.post("/update_vehicle/:id", [Auth, Customer], CustomerController.updateServiceRecord);
    app.delete("/delete_vehicle", [Auth, Customer], CustomerController.deleteVehicle);


};