package com.portfolio.api.repository

import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Async
import org.springframework.stereotype.Repository
import org.springframework.beans.factory.annotation.Value
import org.springframework.beans.factory.annotation.Autowired

import com.portfolio.api.dto.canslim.CanslimBatchRequestDTO

@Repository
class CanslimBatchRepositoryImpl(
    @Value("\${spring.profiles.active}") private val env: String,
    @Value("\${app-conf.canslim_script_dir}") private val canslimScriptDir: String,
    @Value("\${app-conf.canslim_batch_script_filename}") private val canslimBatchScriptFilename: String
) : CanslimBatchRepository {
    @Async  // 非同期処理
    override fun executePythonBatchScript(requestParam: CanslimBatchRequestDTO): Boolean {
        try {
            val args = mutableListOf<String>()
            args.add("-c ${requestParam.country}")
            args.add("-t ${requestParam.target}")
            args.add("-p ${requestParam.processNum.toString()}")
            args.add("-E ${env}")

            val scriptPath = "/home/kyamasaki/canslim/bin/can_slim_info.py"
            val command = mutableListOf("python3", scriptPath).apply { addAll(args) }

            // ProcessBuilderを使ってPythonスクリプトを非同期に実行
            val processBuilder = ProcessBuilder(command)
            processBuilder.redirectErrorStream(true)

            // 実行
            val process = processBuilder.start()
            return true
        } catch (e: Exception) {
            return false
        }
    }
}