package com.portfolio.api.validation

import jakarta.validation.ConstraintValidator
import jakarta.validation.ConstraintValidatorContext

class EnumValidator : ConstraintValidator<ValidEnum, String> {

    private lateinit var enumValues: Array<String>

    override fun initialize(constraintAnnotation: ValidEnum) {
        enumValues = constraintAnnotation.enumClass.java.enumConstants
            .map { (it as Enum<*>).name }
            .toTypedArray()
    }

    override fun isValid(value: String?, context: ConstraintValidatorContext): Boolean {
        return value == null || enumValues.contains(value)
    }
}
