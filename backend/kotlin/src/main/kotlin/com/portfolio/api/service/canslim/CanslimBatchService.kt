package com.portfolio.api.service.canslim

import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Autowired
import com.portfolio.api.dto.canslim.CanslimBatchRequestDTO
import com.portfolio.api.repository.CanslimBatchRepository

@Service
class CanslimBatchService(
    @Autowired private val canslimBatchRepository: CanslimBatchRepository
) {
    fun runBatch(requestParam: CanslimBatchRequestDTO): Boolean {
        return canslimBatchRepository.executePythonBatchScript(requestParam)
    }
}