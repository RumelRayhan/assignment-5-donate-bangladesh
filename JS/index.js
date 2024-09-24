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
    const balance = parseFloat(document.getElementById('balance').innerText);
    if(isNaN(balance) || balance < donateamount){
        alert('Invalid Balannce')
        return;
    }
    const totalDonationBalance = donateamount + donationAmount;

    const totalDonationAmount = document.getElementById('donation-balance');
    totalDonationAmount.innerText = totalDonationBalance;

    // Redeuse Main Balance 
    
    
    const reamningBalance = balance - donateamount;
    const totalReamningBal = document.getElementById('balance')
    totalReamningBal.innerText = reamningBalance;
    
    
    
    

    if(typeof my_modal_1 !== 'undefined'){
        my_modal_1.showModal()
    }
    // my_modal_1.showModal()

    


    const historyTab = document.createElement("div");
    historyTab.className = 'bg-white p-10 border-2 mb-5 ';
    historyTab.innerHTML = `
    <p class="font-bold"> Donate : ${donateamount}Taka Donate for Flood at Noakhali, Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}<p/>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}<p/>
    
    `
    const historyContainer = document.getElementById('history-id')
    historyContainer.insertBefore(historyTab, historyContainer.firstChild)
})
    // 2nd input section 

    const donatebtn = document.getElementById('donatebtn');
    donatebtn.addEventListener('click', function(){
    const donationBalance2 = parseFloat(document.getElementById('donationBalance2').innerText);
    const donateAmount2 = parseFloat(document.getElementById('donate-amount-2').value);
    
    if(isNaN(donateAmount2) || donateAmount2 <= 0){
        alert('Please Inter a valid Donation Amount')
        return;
    }
    if(isNaN(donationBalance2)){
        alert('Donation Balance is Invalid')
        return;
    }
    
    const balance = parseFloat(document.getElementById('balance').innerText);
    if(isNaN(balance) || balance < donateAmount2){
        alert('Invalid Balannce')
        return;
    }
    
    const totalDonationBalance2 = donateAmount2 + donationBalance2;
    const totalDonationAmount = document.getElementById('donationBalance2');
    totalDonationAmount.innerText = totalDonationBalance2;



    
    const reamningBalanace2 = balance - donateAmount2;
    document.getElementById('balance').innerText = reamningBalanace2;

    if(typeof my_modal_1 !== 'undefined'){
        my_modal_1.showModal()
    }
    
    const historyTab = document.createElement("div");
    historyTab.className = 'bg-white p-10 border-2 mb-5 ';
    historyTab.innerHTML = `
    <p class="font-bold"> Donate : ${donateAmount2} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}<p/>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}<p/>
    
    `
    const historyContainer = document.getElementById('history-id')
    historyContainer.insertBefore(historyTab, historyContainer.firstChild)

    })

    
    const donateBtn3 = document.getElementById('donate-btn-3');
    donateBtn3.addEventListener('click', function(){
    const donateinput = parseFloat(document.getElementById('donate-input').value);
    const donateBalance = parseFloat(document.getElementById('donation-balance-3').innerText);
    if(isNaN(donateinput) || donateinput <= 0){
        alert('Please Inter a valid Donation Amount')
        return;
    }
    if(isNaN(donateBalance)){
        alert('Donation Balance is Invalid')
        return;
    }

    const balance = parseFloat(document.getElementById('balance').innerText);
    if(isNaN(balance) || balance < donateinput){
        alert('Invalid Balannce')
        return;
    }
    const tonalDonate = donateBalance + donateinput;
    document.getElementById('donation-balance-3').innerText = tonalDonate;

    // Redeuse Main Balance 
    
    const totalRemaningBl = balance - donateinput
    document.getElementById('balance').innerText = totalRemaningBl;


    if(typeof my_modal_1 !== 'undefined'){
        my_modal_1.showModal()
    }
    const historyTab = document.createElement("div");
    historyTab.className = 'bg-white p-10 border-2 mb-5 ';
    historyTab.innerHTML = `
    <p class="font-bold"> Donate : ${donateinput} Taka Aid for Injured in the Quota Movement</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}<p/>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}<p/>
    
    `
    const historyContainer = document.getElementById('history-id')
    historyContainer.insertBefore(historyTab, historyContainer.firstChild)


    })


//   history section 

    // history button 

    const historyTab = document.getElementById('history-tab');
    const donateTab = document.getElementById('donate-tab')
    historyTab.addEventListener('click', function(){
        historyTab.classList.add('bg-[#B4F461]', 'font-bold');

        donateTab.classList.remove('bg-[#B4F461]', 'font-bold');

    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('history-id').classList.remove('hidden')
    })







    donateButton 
    donateTab.addEventListener('click', function(){
        donateTab.classList.add('bg-[#B4F461]', 'font-bold');
        historyTab.classList.remove('bg-[#B4F461]', 'font-bold');
        document.getElementById('donate-section').classList.remove('hidden')
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