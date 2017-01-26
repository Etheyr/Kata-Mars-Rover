const rover= require('./rover.js');
describe('rover',() => {
	it('rover.forward',() => {
		expect(rover.forward(1,0)).toBe(1,0);
	});
	it('rover.back',() =>{
		expect(rover.back(-1,0)).toBe(-1,0);
	});
	it('rover.left',() =>{
		expect(rover.left(1)).toBe(1);
	});
	it('rover.right',() =>{
		expect(rover.right(1)).toBe(1);
	})
	// it('1+1=2', () => {
	// 	expect(1+1).toBe(2)
	// })
});
