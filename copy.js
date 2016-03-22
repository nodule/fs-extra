module.exports = {
  name: "copy",
  ns: "fs",
  title: "Copy File",
  description: "Copies a file",
  phrases: {
    active: "Copying file from {{input.from}} to {{input.to}}"
  },
  ports: {
    input: {
      from: {
        title: "From Filename",
        type: "string",
        required: true
      },
      to: {
        title: "To Filename",
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
  fn: function copy(input, $, output, state, done, cb, on, fs_extra) {
    var r = function() {
      fs_extra.copy($.from, $.to, function copyCallback(error) {
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