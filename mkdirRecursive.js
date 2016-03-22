module.exports = {
  name: "mkdirRecursive",
  ns: "fs",
  title: "Recursive Create Dirs",
  description: "Recursively Creates Directories",
  phrases: {
    active: "Creating Directory {{input.path}} recursively"
  },
  ports: {
    input: {
      path: {
        title: "Path",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "fs.extra": "##fs.extra##"
    }
  },
  fn: function mkdirRecursive(input, $, output, state, done, cb, on, fs_extra) {
    var r = function() {
      fs_extra.mkdirRecursive($.from, function mkdirRecursiveCallback(error) {
        cb({
          error: error
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}