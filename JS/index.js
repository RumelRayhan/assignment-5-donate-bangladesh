// 1st input section 
    const donateButton = document.getElementById("donateButton");
    donateButton.addEventListener('click', function(){
    // add donation amount 
    const donateamount = parseFloat(document.getElementById('donateAmount').value);
    const donationAmount = parseFloat(document.getElementById('donation-balance').innerText);

    if(isNaN(donateamount) || donateamount <= 0){
        alert('Please Inter a valid Donation Amount')
        return;
    }
    if(isNaN(donationAmount)){
        alert('Donation Balance is Invalid')
        return;
    }
    const totalDonationBalance = donateamount + donationAmount;

    const totalDonationAmount = document.getElementById('donation-balance');
    totalDonationAmount.innerText = totalDonationBalance;

    // Redeuse Main Balance 
    
    const balance = parseFloat(document.getElementById('balance').innerText);
    if(isNaN(balance) || balance < donateamount){
        alert('Invalid Balannce')
        return;
    }
    const reamningBalance = balance - donateamount;
    const totalReamningBal = document.getElementById('balance')
    totalReamningBal.innerText = reamningBalance;
    
    
    
    

    if(typeof my_modal_1 !== 'undefined'){
        my_modal_1.showModal()
    }
    // my_modal_1.showModal()

    




})
    // 2nd input section 

    const donatebtn = document.getElementById('donatebtn');
    donatebtn.addEventListener('click', function(){
    const donationBalance2 = parseFloat(document.getElementById('donationBalance2').innerText);
    const donateAmount2 = parseFloat(document.getElementById('donate-amount-2').value);
    const totalDonationAmount2 = donationBalance2 + donateAmount2;
    document.getElementById('donationBalance2').innerText = totalDonationAmount2;

    // Redeuse Main Balance 
    const balance = parseFloat(document.getElementById('balance').innerText);
    const reamningBalanace2 = balance - donateAmount2;
    document.getElementById('balance').innerText = reamningBalanace2;

    my_modal_1.showModal()


    })


    const donateBtn3 = document.getElementById('donate-btn-3');
    donateBtn3.addEventListener('click', function(){
    const donateinput = parseFloat(document.getElementById('donate-input').value);
    const donateBalance = parseFloat(document.getElementById('donation-balance-3').innerText);
    const tonalDonate = donateBalance + donateinput;
    document.getElementById('donation-balance-3').innerText = tonalDonate;

    // Redeuse Main Balance 
    const balance = parseFloat(document.getElementById('balance').innerText);
    const totalRemaningBl = balance - donateinput
    document.getElementById('balance').innerText = totalRemaningBl;


    my_modal_1.showModal()
    
    })







    // function updatedDonation(donationAmountId,donationBalanceId,balanceId,modalId){
    //     const donateAmount = parseFloat(document.getElementById('donation-Amount-Id').value);
    //     const donationAmount = parseFloat(document.getElementById('donation-Balance-Amount').innerText)
    //     const totalDonationBalance = donateAmount + donationAmount;

    //     document.getElementById(donationBalanceId).innerText = totalDonationBalance;

    //     const balance = parseFloat(document.getElementById('balanceId').innerText);
    //     const reamningBalance = balance - donateAmount;
    //     document.getElementById(balanceId).innerText = reamningBalance;
        

    //     document.getElementById(modalId).showModal();
    //     return {
    //         totalDonationBalance : totalDonationBalance,
    //         reamningBalance : reamningBalance
    //     }
    // }


    // const donatebtn = document.getElementById('donatebtn');
    // donatebtn.addEventListener('click', function(){
    //     function updatedDonation(donationBalance2,){}
    // })