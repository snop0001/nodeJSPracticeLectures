import { getMyAppointments } from "../adapters/supabaseAdapter.js";

export async function getAllAppointmentsFromSupaBaseRightNow(req, res, next){
    console.log('Yay I got all the appointments 💖');
    const allAppointments = await getMyAppointments();
    res.json( allAppointments);
}