module.exports = {
    title: '木剑游侠',
    description: '江湖没什么好的,也就酒还行',
    // 出口文件
    dest: './dist',
    port: '9527',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        // 导航
        nav: require("./nav"),
        // 侧边栏
        sidebar: require("./slider"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
