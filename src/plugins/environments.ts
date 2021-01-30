export type ENV = {
  APP_NAME: string
}

export const env: ENV = {
  APP_NAME: process.env.APP_NAME!,
}

export default (context: any, inject: (name: string, v: any) => any) => {
  inject('env', env)
}
