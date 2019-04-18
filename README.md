# course
教程实例

git从远程仓库gitLab上拉取指定分支到本地仓库

例如：将gitLab 上的dev分支拉取到本地

1 创建一个文件夹
2 git init
3 与远程仓库建立连接：git remote add origin XXXXX.git
4 把远程分支拉到本地 git fetch origin 远程分支名称
5、在本地创建分支dev并切换到该分支
	git checkout -b dev(本地分支名称) origin/dev(远程分支名称)

6、把某个分支上的内容都拉取到本地

git pull origin dev(远程分支名称)
最后，回到本地文件夹hhhh查看，已完成拉取远程某个分支到本地啦！得意