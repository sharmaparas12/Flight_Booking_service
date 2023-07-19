const {Booking}=require('../models/index');



class BookingRepository{
    async create(data){
        try {
            const booking=await Booking.create(data);
            return booking;
            
        } catch (error) {
            console.log("something wrong in repository layer");
            throw {error};
        }
    }
}