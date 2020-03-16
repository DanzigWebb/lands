
/**
 * Declaration of FormValidator.
 * Inspired by jquery-validate.
 */

function FormValidator() {
    this.errors = {};
    this.rules = {};
    this.messages = {};
}

FormValidator.prototype.validators = {
  
    length: function(validator, element, rule) {
        var el = $(element);
        var value = el.val();
        var errs = [];
        
        if (rule.args.minlength) {
            var msg = validator.getMessage(element.name, 'minlength');
            msg = msg || '{0} - допустимо минимум {1} символа(ов)';
            if (value.toString().length < rule.args.minlength) {
                errs.push(FormValidator.utilStrFormat(msg, rule.name, rule.args.minlength));
            }
        }
            
        if (rule.args.maxlength) {
            var msg = validator.getMessage(element.name, 'maxlength');
            msg = msg || '{0} - допустимо максимум {1} символа(ов)';
            if (value.toString().length > rule.args.maxlength) {
                errs.push(FormValidator.utilStrFormat(msg, rule.name, rule.args.minlength));
            }
        }   
        return errs;
    },
  
    required: function(validator, element, rule) {
        var el = $(element);
        var value = el.val();
        var msg = validator.getMessage(element.name, 'required');
        msg = msg || FormValidator.utilStrFormat('{0} - обязательное поле', rule.name);
        var errs = [];
        if (!value) {
            errs.push(msg);
        }
        else if ((el.attr('placeholder') || '').toLowerCase() === value.toString().toLowerCase()) {
            errs.push(msg);
        }
        return errs;
    },
    
    phone: function(validator, element, rule) {
      
        var errs = [];
        var value = $(element).val();
        var msg = validator.getMessage(element.name, 'phone');
        msg = msg || FormValidator.utilStrFormat('{0} - указан неправильный телефон', rule.name)
        if (value.length > 40 || value.length < 7) {
            errs.push(msg);
        } else {
            var cleanPhone = value.replace(/[^\d]/g, '');
            if (cleanPhone.length > 15 || cleanPhone.length < 7) {
                errs.push(msg);
            }
        }
        
        return errs;
    }
}

FormValidator.prototype.addRule = function(field, name, rule, args) {
    args = args || null;
    this.rules[field] = this.rules[field] || [];
    this.rules[field].push({
        field: field,
        name: name,
        rule: rule,
        args: args
    });
}

FormValidator.prototype.addMessages = function(field, messages) {
    this.messages[field] = messages;
}

FormValidator.prototype.getMessage = function(field, rule) {
    var msgs = this.messages[field];
    var msg = msgs && msgs[rule]
    return msg;
}

FormValidator.prototype.watch = function(el) {
    $(document).on('submit', el, {validator: this}, FormValidator.submitHandler);
    $(document).on('change click keyup', el, {validator: this}, FormValidator.changeHandler);
}

FormValidator.submitHandler = function(e) {
    var validator = e.data.validator;
    if (FormValidator.isFormLocked(this)) {
        validator.fireEvent('locked', this, e);
        e.preventDefault();
    } else {
        FormValidator.lockForm(this);
        validator.validate(this, true);
        validator.fireEvent(validator.isValid() ? 'valid' : 'error', this);
        if (!validator.isValid()) {
            e.preventDefault();
            validator.showErrors();
            validator.fireEvent('error', this, e);
            FormValidator.unlockForm(this);
        } else {
            validator.fireEvent('success', this, e);
        }
    }
}

FormValidator.changeHandler = function(e) {
    if (!$(this).data('validating')) {
        return;
    }
    var validator = e.data.validator;
    validator.validate(this, true);
    validator.fireEvent(validator.isValid() ? 'valid' : 'error', this);
}

FormValidator.lockForm = function(form) {
    $(form).data('locked', true);
}

FormValidator.unlockForm = function(form) {
    $(form).data('locked', false);
}

FormValidator.isFormLocked = function(form) {
    return $(form).data('locked');
}

FormValidator.prototype.fireEvent = function(eventName, form, submitEvent) {
    var e = jQuery.Event('validate.' + eventName);
    e.submitEvent = submitEvent || null;
    e.validator = this;
    e.form = form;
    $(form).trigger(e);
}

FormValidator.prototype.validate = function(form, changeState) {
    
    var errors = {}
    for (var field in this.rules) {
        var rules = this.rules[field];
        var errs = errors[field] || [];
        for (var i=0; i < rules.length; ++i) {
            var rule = rules[i];
            errors[field] = errs.concat(this.checkRule(form, rule));
        }
    }
    
    if (changeState) {
        $(form).data('validating', true);
        this.errors = errors;
    }
    
    return errors;
    
}

FormValidator.prototype.getErrorsList = function(errors) {
    errors = errors || this.errors;
    var errs = $.map(errors, function(errs, field) {
        return $.map(errs, function(err) {
            return {field: field, msg: err};
        });
    });
    return errs;
}

FormValidator.prototype.showErrors = function() {
    var errs = $.map(this.getErrorsList(), function(err) {
        return ' - ' + err.msg;
    });
    alert('Пожалуйста, исправьте следующие ошибки:\n\n' + errs.join('\n'));
}

FormValidator.prototype.checkRule = function(form, rule) {
    var validate = this.validators[rule.rule];
    var element = $(form).find('[name=' + rule.field + ']').get(0);
    return validate(this, element, rule);
}

FormValidator.prototype.isValid = function() {
    return this.getErrorsList(this.errors).length == 0;
}

FormValidator.utilStrFormat = function(s) {
    for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}
