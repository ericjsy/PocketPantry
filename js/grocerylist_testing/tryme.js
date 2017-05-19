function test(vals) {
  return new Promise(function(resolve, reject) {

    function check(id) {
      if (id === 3) {
        return resolve(id);
      }
    }

    vals.forEach(function(v) {
      check(v);
    });
    return reject();
  })
}

test([1,2,3,4])
.then((x) => console.log('true', x))
.catch(() => console.log('false'))
