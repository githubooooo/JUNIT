
const  Vector2  = require('../src/Vector2');

it('constructor', () =>{
  const a = new Vector2(); 
  const t = new Vector2(1, 1);
  expect(t).toEqual({x: 1, y: 1});
  expect(Vector2.prototype.isVector2).toBe(true);
  expect(a.x).toBe(0);
  expect(a.y).toBe(0);
});
  it('set', () => {
    const t = new Vector2(1, 1);
    expect(t.set(1, 2)).toEqual(new Vector2(1, 2));
  });
  
  it('add', () => {
    const v = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.add(v)).toEqual(new Vector2(1, 2));
  });
  
  it('addVectors', ()=>{
    const a = new Vector2(1, 2);
    const b = new Vector2(2, 3);
    const t = new Vector2(0, 0);
    expect(t.addVectors(a, b)).toEqual(new Vector2(3, 5));
  });
  
  it('subVectors', ()=>{
    const a = new Vector2(1, 2);
    const b = new Vector2(2, 3);
    const t = new Vector2(0, 0);
    expect(t.subVectors(a, b)).toEqual(new Vector2(-1, -1));
  });
  
  it('sub', ()=>{
    const a = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.sub(a)).toEqual(new Vector2(-1, -2));
  });
  
  it('multiply', ()=>{
    const a = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.multiply(a)).toEqual(new Vector2(0, 0));
    expect(t).toEqual({x: 0, y:0});
  });
  
  it('divide', ()=>{
    const a = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.divide(a)).toEqual(new Vector2(0, 0));
    expect(t).toEqual({x: 0, y:0});
  });
  
  it('dot', ()=>{
    const a = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.dot(a)).toBe(0);
  });
  
  it('cross', ()=>{
    const a = new Vector2(1, 2);
    const t = new Vector2(0, 0);
    expect(t.cross(a)).toBe(0);
  });
  
  it('length', ()=>{
    const a = new Vector2(3, 4);
    expect(a.length()).toBe(5);
  });


