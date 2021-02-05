module.exports = {
  common: {
  },
  // 性别
  sex: {
    0: '男',
    1: '女'
  },
  // 按钮
  btn: {
    add: '新增',
    edit: '编辑',
    update: '修改',
    delete: '删除',
    create: '创建',
    search: '查询',
    reset: '重置',
    lookUp: '查看',
    close: '关闭',
    frozen: '冻结',
    recovery: '恢复',
    confirm: '确定',
    cancel: '取消',
    import: '导入',
    export: '导出',
    save: '保存',
    preview: '预览',
    copy: '复制',
    public: '发布',
    genPaper: '组卷',
    closePaper: '封卷',
    openPaper: '解封',
    recall: '撤回'
  },
  // 输入提示
  input: {
    text: '请输入',
    chose: '请选择',
    phonenumber: '请输入手机号',
    beginTime: '开始时间',
    to: '至',
    endTime: '结束时间',
    choseTime: '选择日期'
  },
  // 操作提示
  op: {
    success: '操作成功！',
    fail: '操作失败！'
  },
  // 警告
  warn: {
    warn: '警告',
    userStatus: '冻结后，用户将无法登录平台，请确认操作！'
  },
  error: {
    error: '错误'
  },
  success: {
    addSuccess: '新增成功',
    updateSuccess: '修改成功',
    auditSuccess: '审核成功',
    deleteSuccess: '删除成功',
    copySuccess: '复制成功',
    importSuccess: '导入成功',
    handleSuccess: '操作成功'
  },
  table: {
    all: '全选',
    status: '状态',
    handle: '操作',
    remark: '备注',
    addDate: '添加日期',
    createTime: '创建时间'
  },
  homepage: {
    1: '访客',
    2: '消息',
    3: '金额',
    4: '订单'
  },
  // 角色
  role: {
    'registered_user': '注册用户',
    'admin': '超级管理员',
    'tenantAdmin': '机构管理员'
  },
  // 规则
  rule: {
    empty: '不能为空'
  },
  // 组织
  org: {

  },
  // 用户
  user: {
    title: '用户信息',
    userId: '用户ID',
    createTime: '注册日期',
    userName: '姓名',
    account: '账号',
    roleName: '身份',
    status: '状态',
    operate: '操作',
    email: '邮箱',
    nickName: '昵称',
    sex: '性别',
    birthday: '生日',
    city: '城市',
    signature: '个性签名',
    avatar: '头像',
    normal: '正常',
    frozen: '冻结'
  },
  // 班级
  class: {
    id: '班级ID',
    className: '班级名称',
    notStart: '未开始',
    ing: '进行中',
    end: '已结束',
    status: '状态',
    handle: '操作',
    orzName: '所属组织',
    major: '专业方向',
    classTeacher: '班主任',
    courseTeacher: '任课老师',
    createTime: '添加时间',
    pace: '进度',
    plan: '排课',
    classDate: '开班日期',
    remark: '备注(可选)',
    remarkInput: '请输入（50个字以内）',
    paceMgm: '进度管理',
    modelName: '阶段名称',
    courseName: '课程名称',
    coursePeriod: '推荐学习学习(课时)',
    baffleFlag: '学习挡板',
    open: '开',
    close: '关',
    addTit: '新增班级',
    updateTit: '修改班级'
  },
  // 排课
  plan: {
    config: '课时配置',
    add: '添加排课',
    choseWeek: '选择周',
    pre: '上一周',
    next: '下一周',
    Monday: '星期一',
    Tuesday: '星期二',
    Wednesday: '星期三',
    Thursday: '星期四',
    Friday: '星期五',
    Saturday: '星期六',
    Sunday: '星期日',
    choseTime: '选择时间范围',
    sectionOne: '第一节',
    sectionTwo: '第二节',
    sectionThree: '第三节',
    sectionFour: '第四节',
    sectionFive: '第五节',
    sectionSix: '第六节',
    sectionSeven: '第七节',
    sectionEight: '第八节',
    addTit: '按周排课',
    dimension: '排课维度',
    once: '单次',
    loop: '时间循环',
    nowWeek: '当周日期',
    startWeek: '开始周',
    endWeek: '结束周',
    choseDay: '选择周几',
    classTime: '上课时间',
    classroom: '教室',
    configSuccess: '配置成功'
  },
  // 学员
  student: {
    import: '批量导入',
    chose: '选择文件',
    studentNo: '学号',
    studentName: '学员姓名',
    class: '班级',
    accountNumber: '账号',
    orz: '所属机构',
    major: '专业方向',
    createTime: '新建日期',
    auditTime: '审核日期',
    audit: '审核',
    basicMsg: '基础信息',
    phonenumber: '账号(手机号)',
    sex: '性别',
    inClass: '所在班级',
    ing: '在读',
    end: '结业',
    out: '退费',
    moreMsg: '更多信息',
    documentType: '证件类型',
    idCard: '身份证',
    driver: '驾驶证',
    Officer: '军官证',
    other: '其他',
    documentNo: '证件号码',
    studentType: '学员类型',
    sociology: '社会考生',
    channel: '渠道考生',
    authentication: '认证讲师',
    inArea: '所在区域',
    postAdress: '邮寄地址',
    auditResult: '审核结果',
    tobeAudit: '待审核',
    FailAudit: '审核不通过',
    passAudit: '审核通过',
    auditRemark: '审核备注',
    reviewer: '审核人',
    addStudent: '添加学员',
    updateStudent: '修改学员',
    auditTit: '学员信息审核',
    importTit: '批量导入',
    noChose: '未选择任何文件',
    importTip: '提示：批量上传学员信息',
    mould: '模板下载'
  },
  // 老师
  teacher: {
    avatar: '上传头像',
    teacherID: '老师ID',
    teacherName: '老师姓名',
    accountNumber: '账号',
    goodAt: '擅长技术',
    orz: '所属组织',
    remark: '备注',
    addTime: '添加日期',
    course: '课程',
    phoneNumber: '手机号',
    teacherTit: '老师称号',
    entryTime: '入职日期',
    inputGoodAt: '请输入技术关键词',
    choseOrz: '选择授权组织',
    inputOrz: '请输入授权组织名称',
    clear: '清空',
    choseCourse: '选择课程',
    inputCourse: '请输入课程名称',
    normal: '正常',
    quit: '离职',
    vacation: '休假',
    addTit: '添加老师',
    updateTit: '修改老师',
    seeTit: '查看老师',
    email: '邮箱',
    optional: '(可选)'
  },
  // 公告
  notice: {
    title: '公告标题',
    tobeRelease: '待发布',
    released: '已发布',
    date: '日期',
    noticeID: '公告ID',
    type: '类型',
    noticeType: '公告类型',
    tz: '通知',
    gg: '公告',
    releaseTime: '发布时间',
    range: '公告范围',
    content: '公告内容',
    send: '立即发送',
    addTit: '添加公告',
    updateTit: '修改公告',
    seeTit: '查看公告',
    sendSuccess: '发送成功',
    releaseCenter: '发布中心',
    releaseOrz: '发布机构',
    inputTit: '请输入(限20个字符)'
  },
  // 专业
  major: {
    avatar: '上传专业封面',
    mid: '专业ID',
    name: '专业名称',
    majorName: '专业名称',
    tenantName: '所属机构',
    code: '专业编码',
    categoryName: '专业类目',
    createTime: '创建时间',
    moduleConfig: '阶段配置',
    addName: '创建专业',
    updateName: '修改专业',
    module: '配置阶段',
    describe: '专业描述',
    special: '专业特色',
    price: '价格',
    endDate: '专业截止日期',
    reviewerEmail: '审核人邮箱',
    usable: '可用',
    disable: '不可用',
    copy: '复制'
  },
  // 阶段
  module: {
    sort: '序号',
    moduleSort: '阶段序号',
    name: '阶段名称',
    moduleId: '阶段ID',
    relation: '课程配置',
    config: '配置课程',
    add: '添加阶段',
    update: '修改阶段',
    describe: '阶段描述',
    inputText: '请输入（序号越小，阶段排序越靠前）'
  },
  // 课程配置
  relation: {
    sort: '序号',
    courseSort: '课程序号',
    courseId: '课程ID',
    courseName: '课程显示名称',
    showName: '显示名称',
    courseOriginalName: '原课程名称',
    haveBaffle: '有无挡板',
    setBaffle: '设置挡板',
    compulsory: '是否必修',
    yes: '是',
    no: '否',
    have: '有',
    nothing: '无',
    addTit: '新增课程',
    updateTit: '修改课程',
    inputText: '请输入（序号越小，课程排序越靠前）'
  },
  // 科目
  subject: {
    id: '科目ID',
    name: '科目名称',
    categoryName: '专业类目',
    open: '公开',
    notOpen: '不公开',
    createTime: '成立日期',
    addTit: '创建类目',
    updateTit: '修改类目'
  },
  // 课程
  config: {
    avatar: '上传课程封面',
    ID: '课程ID',
    name: '课程名称',
    tobeAudit: '待审核',
    onShelf: '上架',
    offShelf: '下架',
    shelfTime: '上架日期',
    teacher: '课程讲师',
    preview: '预览',
    examine: '审核',
    courseware: '课件',
    courseExamine: '课程审核',
    addCourse: '新增课程',
    updateCourse: '修改课程',
    link: '审核链接',
    idea: '审核意见',
    result: '审核结果',
    difficulty: '课程难度',
    forTheCrowd: '适合人群',
    introduction: '课程介绍',
    label: '课程标签',
    courseTeacher: '课程讲师',
    price: '课程价格',
    validity: '课程有效期',
    power: '课程权限',
    classHour: '学习推荐时间(课时)',
    labelInput: '请输入，以";"分开',
    validityInput: '请输入天数',
    sort: '序号',
    handouts: '讲义',
    video: '视频',
    lab: '实验',
    material: '资料',
    test: '练习',
    examination: '考试',
    addName: '名称',
    addHandouts: '添加讲义',
    addVideo: '添加视频',
    addLab: '添加实验',
    addMaterial: '添加资料',
    addTest: '添加练习',
    addExamination: '添加考试',
    selected: '已选',
    add: '增加',
    remove: '移除',
    nothing: '没有要选择的',
    goAdd: '去创建',
    chose: '选择',
    haveTest: '已有练习，无法添加考试',
    haveExamination: '已有考试，无法添加练习'
  },
  // 讲义管理
  handout: {
    handoutID: '讲义ID',
    text: '请输入',
    choose: '请选择',
    handoutName: '讲义名称',
    status: '状态',
    uploadDate: '上传日期',
    search: '查询',
    reset: '重置',
    upload: '上传',
    export: '导出',
    handoutSize: '讲义大小',
    isItAvailable: '是否可用',
    uploadTime: '上传时间',
    rename: '重命名',
    delete: '删除',
    uploadFile: '请选择需要上传的文件',
    browse: '浏览',
    close: '关闭',
    uploadNow: '立即上传',
    fileName: '文件名',
    addHandout: '添加讲义'
  },
  // 视频
  video: {
    newVideo: '新建视频',
    newFolder: '新建文件夹',
    videoID: '视频ID',
    videoName: '视频名称',
    search: '查询',
    video: '视频',
    uploadUserID: '上传用户ID',
    uploadTime: '上传时间',
    addVideo: '新建视频',
    transStatus: '转码状态',
    transFail: '转码失败',
    transTodo: '待转码',
    transDoing: '转码中',
    transDone: '转码成功',
    fileName: '文件名',
    size: '大小',
    onTheShelves: '上架',
    offShelves: '下架',
    ToBeReviewed: '待审核',
    ToBeUploaded: '待上传'
  },
  // 资料
  data: {
    dataID: '资料ID',
    dataName: '资料名称',
    search: '查询',
    upload: '上传',
    export: '导出',
    size: '大小',
    isItAvailable: '是否可用',
    uploadTime: '上传时间',
    rename: '重命名',
    delete: '删除'
  },
  // 题库
  questions: {
    question: '试题',
    questionId: '试题ID',
    arch: '知识结构',
    stem: '试题题干',
    type: '试题类型',
    difficulty: '难度',
    level: '程度',
    status: '状态',
    uploadDate: '上传日期',
    operate: '操作',
    add: '添加',
    modify: '修改',
    proCategary: '专业类目',
    techDir: '技术方向',
    techSub: '技术科目',
    knowledge1: '一级知识点',
    knowledge2: '二级知识点'
  },
  // 测试管理
  exercise: {
    exerciseID: '测试ID',
    exerciseName: '测试名称',
    search: '查询',
    create: '创建',
    export: '导出',
    number: '试题数',
    score: '总分',
    time: '时长',
    rename: '修改',
    testQuestions: '试题',
    delete: '删除'
  },

  // 试卷
  paper: {
    id: '试卷ID',
    name: '试卷名称',
    type: '试卷类型',
    method: '组卷方式',
    status: '试卷状态',
    createTime: '创建时间',
    sumquestions: '总题数',
    sumScore: '总分数',
    singleChoiceScore: '单选题分值',
    multipleChoiceScore: '多选题分值',
    experimentScore: '实验题分值',
    judgementScore: '判断题分值',
    qualifiedScore: '合格分值',
    questionOrderType: '试题顺序',
    strategyNo: '策略编号',
    questionNum: '题目数量'
  },

  // 考试
  exam: {
    examineeNo: '考生编号',
    examineeName: '考生姓名',
    examineeAccount: '考生账号',
    examName: '考试名称',
    className: '班级',
    examDate: '考试时间',
    examScore: '考试成绩',
    theoryScore: '理论成绩',
    labScore: '实验成绩',
    examinationNo: '考试编号',
    paper: '试卷',
    theoryPaper: '理论试卷',
    theoryPaperName: '理论试卷',
    experimentPaper: '实验试卷',
    experimentPaperName: '实验试卷',
    theoryExam: '理论考试',
    experimentExam: '实验考试',
    examStartTime: '考试开始时间',
    examEndTime: '考试结束时间',
    url: '考试链接'
  }
}
