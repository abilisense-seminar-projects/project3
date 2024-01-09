
const associationRepository = require("../repositories/associationsRepository");

const associationService = {
  async createAssociation(therapistID, patientID) {
    return associationRepository.createAssociation(therapistID, patientID)
  },

  async getListOfPatientsByTherapistID(therapistID) {
    return associationRepository.getListOfPatientsByTherapistID(therapistID);
  },
  async markNotificationAsConfirmed(id, receiverID) {
    return associationRepository.markNotificationAsConfirmed(id, receiverID);
  },

}

module.exports = associationService;
