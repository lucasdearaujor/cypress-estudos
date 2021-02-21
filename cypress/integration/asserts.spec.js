/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a,'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).equals(obj)
    expect(obj).to.be.deep.equal({a:1,b:2})
    expect(obj).eql({a:1, b:2})
    // verificar apenas se uma propriedade existe
    expect(obj).include({a:1}) 
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b',2)
    expect(obj).to.not.be.empty
    expect({'a':1}).to.not.be.empty
})

it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)
    expect(str).to.contains('de')
    expect(str).to.match(/^String/) // deve iniciar com 
    expect(str).to.match(/teste$/) // deve finalizar com
    expect(str).to.match(/.{15}/) // verificar se está no tamanho
    expect(str).to.match(/\w+/)  // se contem uma o mais letras dessa
    expect(str).to.match(/\D+/)
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) // verificar se está acima de 
    expect(number).to.be.below(7) // verificar se está abaixo de 
    expect(floatNumber).to.be.equal(5.2123) // verificar se o numero é igual a
    expect(floatNumber).to.be.closeTo(5.2, 0.1) // verificar se o numero é proximo de 
    expect(floatNumber).to.be.above(5)
})
