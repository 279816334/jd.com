function Enlarge (ele) {
    this.ele = document.querySelector(ele);
    this.show = this.ele.querySelector('.show');
    this.mask = this.ele.querySelector('.mask');
    this.enlarge = this.ele.querySelector('.enlarge');
    this.list = this.ele.querySelector('.list');
    this.overOut();
    this.getSize();
    this.setScale();
    this.move();
}
Enlarge.prototype.overOut = function () {
    this.show.addEventListener('mouseover', () => {
        this.enlarge.style.display = 'block';
        this.mask.style.display = 'block';
    })
    this.show.addEventListener('mouseout', () => {
        this.enlarge.style.display = 'none'
        this.mask.style.display = 'none'
    })
}
Enlarge.prototype.getSize = function () {
    // 2-1. 获取遮罩层尺寸
    this.mask_width = parseInt(window.getComputedStyle(this.mask).width)
    this.mask_height = parseInt(window.getComputedStyle(this.mask).height)

    // 2-2. show 盒子尺寸
    this.show_width = this.show.offsetWidth
    this.show_height = this.show.offsetHeight

    // 2-3. 背景图尺寸
    this.enlarge_width = parseInt(window.getComputedStyle(this.enlarge).width)
    this.enlarge_height = parseInt(window.getComputedStyle(this.enlarge).height)
}

Enlarge.prototype.setScale = function () {
    // 2-4. 计算
    this.bg_width = this.enlarge_width * this.show_width / this.mask_width
    this.bg_height = this.enlarge_height * this.show_height / this.mask_height

    // 2-5. 设置
    this.enlarge.style.backgroundSize = this.bg_width + 'px'
    this.enlarge.style.backgroundSize = this.bg_height + 'px'
}

Enlarge.prototype.move = function () {
    // 3-1. 给 show 盒子绑定一个鼠标移动事件
    this.show.addEventListener('mousemove', e => {
        // 处理事件对象兼容
        e = e || window.event

        // 3-2. 那坐标
        let x = e.offsetX - 100
        let y = e.offsetY - 100

        // 3-3. 边界值判断
        if (x <= 0) x = 0
        if (y <= 0) y = 0
        if (x >= this.show_width - this.mask_width) x = this.show_width - this.mask_width
        if (y >= this.show_height - this.mask_height) y = this.show_height - this.mask_height

        // 3-4. 给遮罩层赋值
        this.mask.style.left = x + 'px'
        this.mask.style.top = y + 'px'

        // 3-5. 右边跟着动
        const moveX = this.enlarge_width * x / this.mask_width
        const moveY = this.enlarge_height * y / this.mask_height

        // 3-6. 给背景图赋值
        this.enlarge.style.backgroundPosition = `-${moveX}px -${moveY}px`
    })
}
Enlarge.prototype.bindEvent = function () {
    // 4-1. 给 this.list 绑定一个点击事件
    this.list.addEventListener('mouseover', e => {
        // 处理事件对象兼容
        e = e || window.event
        // 处理事件目标兼容
        const target = e.target || e.srcElement

        if (target.nodeName === 'IMG') {
            // 4-2. 切换边框显示
            for (let i = 0; i < this.list.children.length; i++) {
                this.list.children[i].classList.remove('active')
            }
            // 当前点击的是 img, 得让父元素有 active
            target.parentElement.classList.add('active')

            // 4-3. 换图片
            // 拿到当前点击的这个元素的身上的自定义属性
            const showImg = target.dataset.show
            const enlargeImg = target.dataset.big

            // 赋值给对应的值
            this.show.firstElementChild.src = showImg
            this.enlarge.style.backgroundImage = `url(${enlargeImg})`
        }
    })
}

export { Enlarge }