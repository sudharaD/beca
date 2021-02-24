const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");


exports.viewServiceRecordById = async (req, res) => {
    await ServiceRecord.findOne({ _id: req.params.id }, (err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Service Record id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid Service Record id!"
            });
        }
        
        return res.status(422).json({
            success: true,
            message: "Service Record received!",
            data: serviceRecord
        });
    });
};

exports.createAppointment = async (req, res) => {

    await newAppointment.save((err, appointment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create Appointment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New Appointment is created!",
                data: appointment
            });
        }
    });
};

exports.getAppointment = async (req, res) => {
    await Appointment.find(function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive Appointment!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received appointment!",
            data: appointment
        });
    });
};

exports.updateAppointment = async (req, res) => {
    await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Appointment!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid Appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment updated!",
            data: appointment
        });
    });
};

exports.deleteAppointment = async (req, res) => {
    await Appointment.remove({_id: req.params.id}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment deleted!"
        });
    });
};

exports.createVehicle = async (req, res) => {

    await newVehicle.save((err, vehicle) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create Vehicle!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "Vehicle is created!",
                data: vehicle
            });
        }
    });
};

exports.getVehicle = async (req, res) => {
    await Vehicle.find(function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive Vehicle!",
                data: err
            });
        }
    
        return res.status(200).json({
            success: true,
            message: "Received Vehicle!",
            data: vehicle
        });
    });
};

exports.updateVehicle = async (req, res) => {
    await Vehicle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid Vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle updated!",
            data: vehicle
        });
    });
};

exports.deleteVehicle = async (req, res) => {
    await Vehicle.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle deleted!"
        });
    });
};