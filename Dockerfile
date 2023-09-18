# 基础镜像
FROM node:16

# 设置工作目录
WORKDIR /app

# 拷贝 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 拷贝其余源代码文件
COPY . .

# 构建应用
RUN npm run build

# 使用 Nginx 来运行构建的文件
FROM nginx:stable-alpine

COPY --from=0 /app/dist /usr/share/nginx/html

# 在 80 端口监听
EXPOSE 80

# 运行 nginx
CMD ["nginx", "-g", "daemon off;"]