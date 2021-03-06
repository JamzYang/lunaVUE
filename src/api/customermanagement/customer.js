import request from '@/utils/request'

// crm 新建客户
export function crmCustomerSave(data) {
  return request({
    url: 'crm/customer/save',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// crm 客户列表
export function crmCustomerIndex(data) {
  return request({
    url: 'crm/customer/list',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// 删除
export function crmCustomerDelete(data) {
  return request({
    url: 'crm/customer/deleteByIds',
    method: 'post',
    data: data
  })
}

// crm 公海列表
export function crmCustomerPool(data) {
  return request({
    url: 'crm/customer/queryPoolPageList',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

// crm 详情
export function crmCustomerRead(data) {
  return request({
    url: 'crm/customer/queryById',
    method: 'post',
    data: data
  })
}

// 操作
/**
 * 客户锁定，解锁
 * @param {*} data
 */
export function crmCustomerLock(data) {
  return request({
    url: 'crm/customer/lock',
    method: 'post',
    data: data
  })
}

/**
 * 客户放入公海
 * @param {*} data
 * customer_id 	客户数组
 */
export function crmCustomerPutInPool(data) {
  return request({
    url: 'crm/customer/updateCustomerByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户转移
 * @param {*} data
 */
export function crmCustomerTransfer(data) {
  return request({
    url: 'crm/customer/transfer',
    method: 'post',
    data: data
  })
}

/**
 * 客户导出
 * @param {*} data
 * customer_id 客户ID
 */
export function crmCustomerExcelExport(data) {
  return request({
    url: 'crm/customer/batchExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

export function crmCustomerExcelAllExport(data) {
  return request({
    url: 'crm/customer/allExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 客户导入
 * @param {*} data
 * customer_id 客户ID
 */
export function crmCustomerExcelImport(data) {
  var param = new FormData()
  Object.keys(data).forEach(key => {
    param.append(key, data[key])
  })
  return request({
    url: 'crm/customer/uploadExcel',
    method: 'post',
    data: param,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

/**
 * 客户导入模板下载
 * @param {*} data
 *
 */
export const crmCustomerExcelDownloadURL = process.env.BASE_API + 'crm/customer/downloadExcel'
export function crmCustomerDownloadExcelAPI(data) {
  return request({
    url: 'crm/customer/downloadExcel',
    method: 'post',
    data: data,
    responseType: 'blob'
  })
}

/**
 * 公海导出
 * @param {*} data
 */
export function crmCustomerPoolExcelExportAPI(data) {
  return request({
    url: 'crm/customer/poolBatchExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    timeout: 60000
  })
}

export function crmCustomerPoolExcelAllExport(data) {
  return request({
    url: 'crm/customer/poolAllExportExcel',
    method: 'post',
    data: data,
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * 客户分配
 * @param {*} data
 */
export function crmCustomerDistribute(data) {
  return request({
    url: 'crm/customer/distributeByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户领取
 * @param {*} data
 */
export function crmCustomerReceive(data) {
  return request({
    url: 'crm/customer/receiveByIds',
    method: 'post',
    data: data
  })
}

/**
 * 客户下联系人
 * @param {*} data
 */
export function crmCustomerQueryContacts(data) {
  return request({
    url: 'crm/customer/queryContacts',
    method: 'post',
    data: data
  })
}

/**
 * 客户下商机
 * @param {*} data
 */
export function crmCustomerQueryBusiness(data) {
  return request({
    url: 'crm/customer/queryBusiness',
    method: 'post',
    data: data
  })
}

/**
 * 客户下合同
 * @param {*} data
 */
export function crmCustomerQueryContract(data) {
  return request({
    url: 'crm/customer/queryContract',
    method: 'post',
    data: data
  })
}

/**
 * 客户下回款计划
 * @param {*} data
 */
export function crmCustomerQueryReceivablesPlan(data) {
  return request({
    url: 'crm/customer/queryReceivablesPlan',
    method: 'post',
    data: data
  })
}

/**
 * 客户下回款
 * @param {*} data
 */
export function crmCustomerQueryReceivables(data) {
  return request({
    url: 'crm/customer/queryReceivables',
    method: 'post',
    data: data
  })
}


/**
 * 跟进记录
 * @param {*} data
 */
export function crmCustomerRecordSave(data) {
  return request({
    url: 'crm/customer/addRecord',
    method: 'post',
    data: data
  })
}
export function crmCustomerRecordIndex(data) {
  return request({
    url: 'crm/customer/getRecord',
    method: 'post',
    data: data
  })
}
// 团队操作

/**
 * 相关团队创建
 * @param {*} data
 * types crm_leads
 * typesId 分类ID
 */
export function crmCustomerSettingTeamSave(data) {
  return request({
    url: 'crm/customer/addMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerSettingTeamDelete(data) {
  return request({
    url: 'crm/customer/deleteMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerTeamMembers(data) {
  return request({
    url: 'crm/customer/getMembers',
    method: 'post',
    data: data
  })
}

export function crmCustomerUpdateMembers(data) {
  return request({
    url: 'crm/customer/updateMembers',
    method: 'post',
    data: data
  })
}

/**
 * 查重
 * @param {*} data
 */
export function crmCustomerQueryListAPI(data) {
  return request({
    url: 'crm/customer/queryList',
    method: 'post',
    data: data
  })
}

/**
 * 客户标记跟进
 * @param {*} data
 * id 客户IDs
 */
export function crmCustomerSetFollowAPI(data) {
  return request({
    url: 'CrmBackLog/setCustomerFollowup',
    method: 'post',
    data: data
  })
}

/**
 * 客户成交状态修改
 * @param {*} data
 * id 客户IDs
 */
export function crmCustomerDealStatusAPI(data) {
  return request({
    url: 'crm/customer/setDealStatus',
    method: 'post',
    data: data
  })
}

/**
export function getIPs(callback) {
  var ip_dups = {};
  //compatibility for firefox and chrome
  var RTCPeerConnection = window.RTCPeerConnection
      || window.mozRTCPeerConnection
      || window.webkitRTCPeerConnection;
  //bypass naive webrtc blocking
  if (!RTCPeerConnection) {
    var iframe = document.createElement("iframe");
    //invalidate content script
    iframe.sandbox = "allow-same-origin";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
    var win = iframe.contentWindow;
    window.RTCPeerConnection = win.RTCPeerConnection;
    window.mozRTCPeerConnection = win.mozRTCPeerConnection;
    window.webkitRTCPeerConnection = win.webkitRTCPeerConnection;
    RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;
  }
  var mediaConstraints = {
    optional: [{RtpDataChannels: true}] };
  //firefox already has a default stun server in about:config
  // media.peerconnection.default_iceservers =
  // [{"url": "stun:stun.services.mozilla.com"}] var servers = undefined;
  //add same stun server for chrome
  if(window.webkitRTCPeerConnection)
    var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);
  //listen for candidate events
  pc.onicecandidate = function(ice){
    //skip non-candidate events
    if(ice.candidate){
      //match just the IP address
      var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
      var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
      //remove duplicates
      if(ip_dups[ip_addr] === undefined)
        callback(ip_addr);
      ip_dups[ip_addr] = true;
    }
  };
  //create a bogus data channel
  pc.createDataChannel("");
  //create an offer sdp
  pc.createOffer(function(result){
    //trigger the stun server request
    pc.setLocalDescription(result, function(){}, function(){});
  }, function(){});
}
*/
