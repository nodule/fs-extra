module.exports = {
  name: "rmRecursive",
  ns: "fs",
  title: "Recursive Dir Removal",
  description: "Recursively Removes Directories",
  phrases: {
    active: "Removing Directory {{input.path}} recursively"
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
  fn: function rmRecursive(input, output, state, done, cb, on, fs_extra) {
    var r = function() {
      fs_extra.rmRecursive(input.path, function rmRecursiveCallback(error) {
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