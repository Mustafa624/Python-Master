// Authentication System
const users = JSON.parse(localStorage.getItem('users')) || [];

// Default admin user
if (users.length === 0) {
    users.push({
        id: 1,
        username: 'admin',
        email: 'admin@pythonmaster.com',
        password: 'admin123', // In production, this should be hashed
        name: 'المدير',
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('users', JSON.stringify(users));
}

// Check if user is logged in
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (currentUser && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    } else if (!currentUser && !window.location.pathname.includes('login.html')) {
        // Only redirect if not on login page
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
            window.location.href = 'login.html';
        }
    }
}

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        // Find user
        const user = users.find(u => 
            (u.username === username || u.email === username) && 
            u.password === password
        );
        
        if (user) {
            // Success
            const userData = {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name,
                loginTime: new Date().toISOString()
            };
            
            if (rememberMe) {
                localStorage.setItem('currentUser', JSON.stringify(userData));
            } else {
                sessionStorage.setItem('currentUser', JSON.stringify(userData));
            }
            
            showMessage('success', 'تم تسجيل الدخول بنجاح! جاري التوجيه...');
            
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showMessage('error', 'اسم المستخدم أو كلمة المرور غير صحيحة');
        }
    });
}

// Show Message
function showMessage(type, message) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    
    if (type === 'error') {
        document.getElementById('errorText').textContent = message;
        errorDiv.classList.add('show');
        successDiv.classList.remove('show');
        setTimeout(() => {
            errorDiv.classList.remove('show');
        }, 5000);
    } else {
        document.getElementById('successText').textContent = message;
        successDiv.classList.add('show');
        errorDiv.classList.remove('show');
    }
}

// Social Login (Demo)
function socialLogin(provider) {
    showMessage('success', `جارٍ تسجيل الدخول عبر ${provider}...`);
    // In a real app, this would redirect to OAuth provider
    setTimeout(() => {
        const demoUser = {
            id: Date.now(),
            username: `user_${provider}`,
            email: `user@${provider}.com`,
            name: `مستخدم ${provider}`,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(demoUser));
        window.location.href = 'index.html';
    }, 1500);
}

// Signup (Demo)
function showSignup() {
    const username = prompt('أدخل اسم المستخدم:');
    if (!username) return;
    
    const email = prompt('أدخل البريد الإلكتروني:');
    if (!email) return;
    
    const password = prompt('أدخل كلمة المرور:');
    if (!password) return;
    
    const newUser = {
        id: Date.now(),
        username: username,
        email: email,
        password: password,
        name: username,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    showMessage('success', 'تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.');
}

// Logout
function logout() {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Get Current User
function getCurrentUser() {
    const user = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Check auth on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    // Ensure login form is properly initialized
    const loginForm = document.getElementById('loginForm');
    if (loginForm && !loginForm.hasAttribute('data-initialized')) {
        loginForm.setAttribute('data-initialized', 'true');
        // Form handler is already set up above, but ensure it works
    }
    
    // Test message display
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    if (!errorDiv || !successDiv) {
        console.warn('Message divs not found in login page');
    }
});
