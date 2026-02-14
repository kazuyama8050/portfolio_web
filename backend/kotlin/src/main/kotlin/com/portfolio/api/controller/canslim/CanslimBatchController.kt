package com.portfolio.api.controller.canslim

import com.portfolio.api.service.canslim.CanslimBatchService
import com.portfolio.api.dto.canslim.CanslimBatchRequestDTO

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.http.ResponseEntity


/** CanSlimのバッチ処理
 * 実行中バッチ処理情報取得API
 * バッチ実行命令API
 * 
 */

@RestController
@RequestMapping("/api/canslim/batch")
class CanslimBatchController(
    private val canslimBatchService: CanslimBatchService
) {
    @PostMapping("/run")
    fun runBatch(@RequestBody @Validated requestParam: CanslimBatchRequestDTO):  ResponseEntity<Boolean> {
        val result = canslimBatchService.runBatch(requestParam)
        return ResponseEntity.ok(result)
    }
}
