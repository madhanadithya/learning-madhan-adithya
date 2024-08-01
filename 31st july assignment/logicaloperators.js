console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);

console.log(Boolean(true));
console.log(Boolean(4));
console.log(Boolean('Hello'));
console.log(Boolean({ name: 'John' }));

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const person = {
    name: 'John'
};

console.log(person.name || 'Unknown');
console.log(person.job || 'Unknown');

console.log(3 && 1 && 0 && 10);
console.log(true && 1 && { name: 'John' });
