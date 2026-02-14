package com.portfolio.api

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties

@SpringBootApplication
// @EnableConfigurationProperties(AppProperties::class)
class ApiApplication

fun main(args: Array<String>) {
	runApplication<ApiApplication>(*args)
}
