'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getNextId = require('./getNextId');

var _getNextId2 = _interopRequireDefault(_getNextId);

var TextInput = (function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(TextInput.prototype), 'constructor', this).apply(this, args);
    this.state = {
      id: this.context.labelId || this.props.id || (0, _getNextId2['default'])('select_')
    };
  }

  _createClass(TextInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var hasInitialValue = this.context.getFormData(this.props.name) != undefined;
      if (!hasInitialValue) {
        this.context.updateFormData(this.props.name, '');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var valueLink = {
        value: this.context.getFormData(this.props.name),
        requestChange: function requestChange(newValue) {
          return _this.context.updateFormData(_this.props.name, newValue);
        }
      };

      var _props = this.props;
      var disabled = _props.disabled;
      var required = _props.required;
      var type = _props.type;
      var placeholder = _props.placeholder;
      var pattern = _props.pattern;
      var title = _props.title;
      var className = _props.className;
      var id = this.state.id;

      return _react2['default'].createElement('input', { disabled: disabled,
        id: id,
        title: title,
        pattern: pattern,
        placeholder: placeholder,
        className: className,
        valueLink: valueLink,
        required: required,
        type: type });
    }
  }]);

  return TextInput;
})(_react2['default'].Component);

TextInput.propTypes = {
  className: _react2['default'].PropTypes.string,
  disabled: _react2['default'].PropTypes.bool,
  id: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string.isRequired,
  pattern: _react2['default'].PropTypes.string,
  placeholder: _react2['default'].PropTypes.string,
  required: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string,
  type: function type(props, propName) {
    if (!/email|text|url|password/.test(props[propName])) {
      return new Error('TextInput type must be one of email, text, url or password.');
    }
  }
};

TextInput.defaultProps = {
  disabled: false,
  required: false,
  type: 'text'
};

TextInput.contextTypes = {
  labelId: _react2['default'].PropTypes.string,
  updateFormData: _react2['default'].PropTypes.func,
  getFormData: _react2['default'].PropTypes.func
};

exports['default'] = TextInput;
module.exports = exports['default'];