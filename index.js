var naming = function (target, type, deep) {
  if (typeof target === 'string') {
    return covertion(target, type)
  } else if (typeof target === 'object') {
    var obj = {}
    for (var key in target) {
      if (typeof target[key] === 'object' && deep) {
        target[key] = naming(target[key], type, deep)
      }
      obj[covertion(key, type)] = target[key]
    }
    return obj
  } else {
    return target
  }
}

naming.disperse = function (str) {
  var parts = participle(str)
  var pieces = parts.words
  parts._begin && pieces.unshift(parts._begin)
  parts._end && pieces.push(parts._begin)
  return pieces
}

function participle (str) {
  var words = []
  var beginMat = str.match(/^_+/g)
  var endMat = str.match(/_+$/g)
  var _begin = beginMat ? beginMat[0] : ''
  var _end = endMat ? endMat[0] : ''
  str = str.replace(/(^_+)|(_+$)/g, '')
  str.split(/_+|-+/).forEach(function (seg) {
    var mat = seg.match(/([A-Z]*?[a-z]+)|([0-9]+)|([^\w]+)/g)
    mat ? words = words.concat(mat) : words.push(seg)
  })
  words.forEach(function (word, index) {
    words[index] = word.toLowerCase()
  })
  return {
    words: words,
    _begin: _begin,
    _end: _end
  }
}

function covertion (str, type) {
  var parts = participle(str)
  var name = ''
  switch (type) {
    case 'camel':
      parts.words.forEach(function (word, index) {
        if (index === 0) {
          name += word
        } else if (index === 1 && /\$+$/.test(parts.words[0])) {
          name += word
        } else {
          name += word[0].toUpperCase() + word.slice(1)
        }
      })
      break
    case 'pascal':
      parts.words.forEach(function (word) {
        name += word[0].toUpperCase() + word.slice(1)
      })
      break
    case 'snake':
      name = parts.words.join('-')
      break
    case 'kebab':
      name = parts.words.join('_')
      break
    case 'caps':
      name = parts.words.join('_').toUpperCase()
      break
  }
  return parts._begin + name + parts._end
}

module.exports = naming







