import ContactService from "../../service/ContactService";
import ContactStore from '../ContactStore'
jest.mock("../../service/ContactService")

describe('contact store' , ()=>{
    beforeAll(()=>{
        ContactService.getContacts.mockReturnValue(Promise.resolve([
            {
                "_id": "5a56640269f443a5d64b32ca",
                "name": "Ochoa Hyde",
                "email": "ochoahyde@renovize.com",
                "phone": "+1 (968) 593-3824"
            },
            {
                "_id": "5a5664025f6ae9aa24a99fde",
                "name": "Hallie Mclean",
                "email": "halliemclean@renovize.com",
                "phone": "+1 (948) 464-2888"
            }
        ]))
    })
    it('load contacts' , async()=>{
        await ContactStore.loadContacts()
        expect(ContactStore.contacts.length).toBe(2)
        expect(ContactStore.contacts[0].name).toBe('Ochoa Hyde')
    })
})