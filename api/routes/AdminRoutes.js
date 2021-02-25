module.exports = function(app) {

    const { Auth } = require("../middlewares/auth");
    const { Admin } = require("../middlewares/Admin");

    const AdminController = require("../controllers/AdminController")
    
    // //Manage service agents
    app.post("/admin/create-agent",[Auth,Admin],AdminController.createrAgent);
    app.delete("/admin/delete-agent/:id",[Auth,Admin],AdminController.deleteServiceAgent);
    // app.get("/superAdmin/view-all-serviceAgents",[Auth,SuperAdmin],Super_admin_controller.getAllServiceAgents);//Worked
    
    // //Manage all customers
    // app.get("/superAdmin/view-all-customers",[Auth,SuperAdmin],Super_admin_controller.getAllCustomers);//Worked
    // app.delete("/superAdmin/delete-customer/:id",[Auth,SuperAdmin],Super_admin_controller.deleteCustomer);//Worked
    
    // //Manage all vehicles
    // app.get("/superAdmin/view-all-vehicles",[Auth,SuperAdmin],Super_admin_controller.getAllCustomerVehicles);//Worked
    // app.delete("/superAdmin/delete-vehicle/:id",[Auth,SuperAdmin],Super_admin_controller.deleteCustomerVehicle);//Worked

    // //Manage all vehicle service records
    // app.get("/superAdmin/view-all-vehicle-service-records",[Auth,SuperAdmin],Super_admin_controller.getAllCustomerVehiclesRecords);//Worked
    // app.delete("/superAdmin/delete-vehicle-service-record/:id",[Auth,SuperAdmin],Super_admin_controller.deleteCustomerVehicleRecord);//Worked
};