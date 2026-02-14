package com.portfolio.api.repository

import com.portfolio.api.dto.canslim.CanslimBatchRequestDTO

interface CanslimBatchRepository {
    fun executePythonBatchScript(requestParam: CanslimBatchRequestDTO): Boolean
}