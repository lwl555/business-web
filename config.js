// 前端调用后端的基地址：Supabase Edge Function
// 项目 ref: wcnssyiqitugqfmcbdhe  -> 函数名 business-api
window.API_BASE = 'https://wcnssyiqitugqfmcbdhe.functions.supabase.co/business-api';

// 图片上传用的 Storage 配置
// 说明：anon key 是 Supabase 设计上允许公开的客户端 key（受 RLS 策略约束，不是敏感密钥）
window.SUPABASE_URL = 'https://wcnssyiqitugqfmcbdhe.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjbnNzeWlxaXR1Z3FmbWNiZGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM0MDEyNzUsImV4cCI6MjA5ODk3NzI3NX0.9EfbEr7BQhZtbOwHJ3IrkOy16kcaxlmzuJuV0A2Z8Eg';
window.UPLOAD_BUCKET = 'biz-uploads';
window.MAX_IMAGES = 6;              // 最多上传几张
window.MAX_IMAGE_MB = 5;            // 单张大小上限（与 Storage 桶限制保持一致）
