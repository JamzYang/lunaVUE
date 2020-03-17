import request from '@/utils/request'

// crm 新建联系人
export function crmContactsSave(data) {
  return request({
    url: 'crm/contacts/addOrUpdate',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// crm 列表
export function crmContactsIndex(data) {
  return request({
    url: 'crm/contacts/list',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 删除
export function crmContactsDelete(data) {
  return request({
    url: 'crm/contacts/deleteByIds',
    method: 'post',
    data: data
  })
}

// crm 详情
export function crmContactsRead(data) {
  return request({
    url: 'crm/contacts/queryById',
    method: 'post',
    data: data
  })
}

/**
 * 联系人转移
 * @param {*} data
 */
export function crmContactsTransfer(data) {
  return request({
    url: 'crm/contacts/transfer',
    method: 'post',
    data: data
  })
}

/**
 * 联系人下商机
 * @param {*} data
 */
export function crmContactsQueryBusiness(data) {
  return request({
    url: 'crm/contacts/queryBusiness',
    method: 'post',
    data: data
  })
}

/**
 * 跟进记录
 * @param {*} data
 */
export function crmContactsRecordSave(data) {
  return request({
    url: 'crm/contacts/addRecord',
    method: 'post',
    data: data
  })
}
export function crmContactsRecordIndex(data) {
  return request({
    url: 'crm/contacts/getRecord',
    method: 'post',
    data: data
  })
}


/**
 * 联系人导出
 * @param {*} data
 * Contacts_id 联系人ID
 */
export function crmContactsExcelExport(data) {
  return request({
    url: 'crm/contacts/batchExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

export function crmContactsExcelAllExport(data) {
  return request({
    url: 'crm/contacts/allExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 联系人导入
 * @param {*} data
 *
 */
export function crmContactsExcelImport(data) {
  var param = new FormData()
  Object.keys(data).forEach(key => {
    param.append(key, data[key])
  })
  return request({
    url: 'crm/contacts/uploadExcel',
    method: 'post',
    data: param,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 联系人导入模板下载
 * @param {*} data
 *
 */
export const crmContactsExcelDownloadURL = process.env.BASE_API + 'crm/contacts/downloadExcel'
export function crmContactsDownloadExcelAPI(data) {
  return request({
    url: 'crm/contacts/downloadExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

/**
 * 查重
 * @param {*} data
 */
export function crmContactsQueryListAPI(data) {
  return request({
    url: 'crm/contacts/queryList',
    method: 'post',
    data: data
  })
}

/**
 * 联系人关联商机
 * @param {*} data
 */
export function crmContactsRelateBusinessAPI(data) {
  return request({
    url: 'crm/contacts/relateBusiness',
    method: 'post',
    data: data
  })
}

/**
 * 联系人取消关联商机
 * @param {*} data
 */
export function crmContactsUnrelateBusinessAPI(data) {
  return request({
    url: 'crm/contacts/unrelateBusiness',
    method: 'post',
    data: data
  })
}
