function logout() {
    // 保存されている情報を消す
    localStorage.removeItem('currentUserLSK');
    
    // ログイン画面に戻る
    location.href = './login.html';
}