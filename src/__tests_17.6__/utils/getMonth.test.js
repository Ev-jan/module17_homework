import { getMonth } from "../../utils/getMonth";

describe('test for getMonth function', ()=>{
    it('sould work correctly with input 5', ()=> {
        expect(getMonth(5)).toBe('май')
    }),
    it('sould work correctly with input 12', ()=> {
        expect(getMonth(12)).toBe('декабрь')
    }),
    it('sould work correctly with input 20', ()=> {
        expect(getMonth(20)).toBe('неизвестно')
    }),
    it('sould work correctly with string input', ()=> {
        expect(getMonth('NaN')).toBe('неизвестно')
    })
})