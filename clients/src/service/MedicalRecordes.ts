import axios from "axios";
export default class MedicalRecordService {
    private static serverUrl = "http://localhost:5000/api/medical-records/";

    // Method to return the server URL (or optionally make an API call)
    public static getAllMedicalRecords() {
         const productUrl = `${this.serverUrl}`;
        return  axios.get(productUrl)
    }
}


