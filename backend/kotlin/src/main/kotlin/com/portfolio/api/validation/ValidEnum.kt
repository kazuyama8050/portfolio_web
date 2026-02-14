package com.portfolio.api.validation

import jakarta.validation.Constraint
import kotlin.reflect.KClass

@Target(AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
@Constraint(validatedBy = [EnumValidator::class])
annotation class ValidEnum(
    val enumClass: KClass<out Enum<*>>,
    val message: String = "Value is not valid",
    val groups: Array<KClass<*>> = [],
    val payload: Array<KClass<out Any>> = []
)
