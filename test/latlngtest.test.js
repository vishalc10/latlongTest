import { TestScheduler } from 'jest';
import {latlngtest} from '../latlngtest';

let obj = {
    address: '155 E Frye Rd Chandler AZ',
}

test('test home lat long', () => {
    return latlngtest(obj).then(res => {
        expect(res.lat).toBe(33.32371)
        expect(res.lng).toBe(-111.83018)
    })
});