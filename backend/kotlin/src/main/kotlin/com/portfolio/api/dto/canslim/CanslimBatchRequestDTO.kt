package com.portfolio.api.dto.canslim

import java.util.*
import jakarta.validation.constraints.NotEmpty
import jakarta.validation.constraints.Max
import jakarta.validation.constraints.Min
import jakarta.validation.constraints.NotNull

import com.portfolio.api.enums.canslim.CountryEnum
import com.portfolio.api.enums.canslim.EnvEnum
import com.portfolio.api.enums.canslim.TargetEnum

import com.portfolio.api.validation.ValidEnum

data class CanslimBatchRequestDTO(
    @field:NotNull(message = "環境は必須です")
    @field:ValidEnum(enumClass = EnvEnum::class, message = "環境が不正値です")
    val env: String,

    @field:NotNull(message = "バッチ対象は必須です")
    @field:ValidEnum(enumClass = TargetEnum::class, message = "バッチ対象が不正値です")
    val target: String,

    @field:NotNull(message = "プロセス数は必須です")
    @field:Max(4, message = "プロセス数は1~4を入力してください")
    @field:Min(1, message = "プロセス数は1~4を入力してください")
    val processNum: Int,

    @field:NotNull(message = "国は必須です")
    @field:ValidEnum(enumClass = CountryEnum::class, message = "国が不正値です")
    val country: String
)