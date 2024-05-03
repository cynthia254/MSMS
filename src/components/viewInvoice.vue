<template>
  <section id="invoice" class="py-5 bg-light">
    <div class="container">
      <div class="card">
        <div class="card-header bg-primary text-white border-0">
          Date <strong>01/01/01/2018</strong>
          <span class="float-right">
            <strong>Status:</strong> All Due Invoices</span
          >
        </div>
        <div class="card-body">
          <div class="row mb-4">
            <div class="col-sm-6">
              <h6 class="mb-3">From:</h6>
              <div>
                <strong>Lorem Ipsum</strong>
              </div>
              <div>Branch: Lorem Ipsum</div>
              <div>Plot No - 38, LoremIpsum,</div>
              <div>Lorem Ipsum</div>
              <div>
                Email:
                <a href="mailto:LoremIpsum@gmail.com">LoremIpsum@gmail.com</a>
              </div>
              <div>Phone: +91 9XXXXXXXXXX</div>
            </div>

            <div class="col-sm-6">
              <h6 class="mb-3">To:</h6>
              <div>
                <strong>Lorem Ipsum</strong>
              </div>
              <div>Plot No - 38, LoremIpsum,</div>
              <div>Lorem Ipsum</div>
              <div>
                Email:
                <a href="mailto:LoremIpsum@gmail.com">LoremIpsum@gmail.com</a>
              </div>
              <div>Phone: +91 9XXXXXXXXXX</div>
            </div>
          </div>
          <div class="table-responsive-sm">
            <table class="table table-striped">
              <thead class="bg-blue-200 text-white">
                <tr>
                  <th class="center">#</th>
                  <th>Invoice Id</th>
                  <th>Invoice Date</th>
                  <th class="right">Due Date</th>
                  <th class="center">Due Amount</th>
                  <th class="right">Delay Penalty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="center">1</td>
                  <td class="left strong">14595</td>
                  <td class="left">01 Dec, 2018</td>
                  <td class="right">06 Dec, 2018</td>
                  <td class="center">
                    <i class="fas fa-rupee-sign"></i> 7,249.00
                  </td>
                  <td class="right">
                    <i class="fas fa-rupee-sign"></i> 700.00
                  </td>
                </tr>
                <tr>
                  <td class="center">2</td>
                  <td class="left strong">13530</td>
                  <td class="left">01 Nov, 2018</td>
                  <td class="right">06 Nov, 2018</td>
                  <td class="center">
                    <i class="fas fa-rupee-sign"></i> 7,249.00
                  </td>
                  <td class="right">
                    <i class="fas fa-rupee-sign"></i> 3,700.00
                  </td>
                </tr>
                <tr>
                  <td class="center">3</td>
                  <td class="left strong">13525</td>
                  <td class="left">01 Nov, 2018</td>
                  <td class="right">06 Nov, 2018</td>
                  <td class="center">
                    <i class="fas fa-rupee-sign"></i> 16,000.00
                  </td>
                  <td class="right">
                    <i class="fas fa-rupee-sign"></i> 3,700.00
                  </td>
                </tr>
                <tr>
                  <td class="center">4</td>
                  <td class="left strong">11496</td>
                  <td class="left">04 Sep, 2018</td>
                  <td class="right">09 Sep, 2018</td>
                  <td class="center">
                    <i class="fas fa-rupee-sign"></i> 2,700.00
                  </td>
                  <td class="right"><i class="fas fa-rupee-sign"></i> 0.00</td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td class="right"><strong>Total</strong></td>
                  <td class="center text-danger">
                    <i class="fas fa-rupee-sign"></i> 39,597.00
                  </td>
                  <td class="right text-danger">
                    <i class="fas fa-rupee-sign"></i> 17,900.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-lg-6 col-sm-6 ml-auto">
              <table class="table table-clear">
                <tbody>
                  <tr>
                    <td class="left">
                      <strong>Subtotal</strong>
                    </td>
                    <td class="right">
                      <i class="fas fa-rupee-sign"></i> 39,597.00
                    </td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Discount (20%)</strong>
                    </td>
                    <td class="right">
                      <i class="fas fa-rupee-sign"></i> 1,000.00
                    </td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Limited time discount on delay penalty </strong>
                    </td>
                    <td class="right">
                      <i class="fas fa-rupee-sign"></i> 16,900.00
                    </td>
                  </tr>
                  <tr>
                    <td class="left">
                      <strong>Total Amount Payble</strong>
                    </td>
                    <td class="right text-success">
                      <strong
                        ><i class="fas fa-rupee-sign"></i> 40,597.00</strong
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header bg-dark text-white">
                  <h5 class="m-0">
                    Please provide your offline payment details
                  </h5>
                </div>
                <div class="card-body">
                  <nav
                    class="nav bg-light nav-pills rounded nav-fill flex-column flex-sm-row mb-3"
                    role="tablist"
                  >
                    <a
                      class="flex-sm-fill text-sm-center nav-link active"
                      data-toggle="pill"
                      href="#nav-tab-card"
                    >
                      <i class="fab fa-internet-explorer"></i> Online</a
                    >
                    <a
                      class="flex-sm-fill text-sm-center nav-link"
                      data-toggle="pill"
                      href="#nav-tab-paypal"
                    >
                      <i class="fas fa-money-check"></i> Cheque</a
                    >
                    <a
                      class="flex-sm-fill text-sm-center nav-link"
                      data-toggle="pill"
                      href="#nav-tab-bank"
                    >
                      <i class="fas fa-university"></i> Bank Transfer</a
                    >
                    <a
                      class="flex-sm-fill text-sm-center nav-link"
                      data-toggle="pill"
                      href="#nav-tab-cash"
                    >
                      <i class="far fa-money-bill-alt"></i> Cash</a
                    >
                  </nav>
                  <div class="tab-content">
                    <div class="tab-pane fade show active" id="nav-tab-card">
                      <p class="alert alert-success">
                        Some text success or error
                      </p>
                      <form role="form" class="needs-validation" novalidate>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="payd">Payment Date:</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend"
                                  ><i class="fas fa-calendar-check"></i
                                ></span>
                              </div>
                              <input
                                type="text"
                                class="form-control datepicker"
                                id="payd"
                                placeholder="DD/MM/YY"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a date.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="cheque">Transaction Reference #</label>
                            <input
                              type="text"
                              class="form-control"
                              name="cheque"
                              placeholder=""
                              required=""
                            />
                            <div class="invalid-feedback">
                              Please Fill Transaction Reference.
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->

                        <div class="form-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="validatedCustomFile"
                              >Screenshot of Receipt/Payslip:</label
                            >
                            <div class="invalid-feedback">
                              Please Upload Screenshot of Receipt/Payslip
                            </div>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            class="form-text text-muted"
                            >Only jpg,jpeg,gif,png allowed, Max Size 1
                            MB.</small
                          >
                        </div>
                        <!-- form-group.// -->

                        <button
                          class="subscribe btn btn-primary btn-block"
                          type="button"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <!-- tab-pane.// -->
                    <div class="tab-pane fade" id="nav-tab-paypal">
                      <form role="form" class="was-validated">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="username">Full name</label>
                              <input
                                type="text"
                                class="form-control"
                                name="username"
                                placeholder=""
                                required=""
                              />
                              <div class="invalid-feedback">
                                Please Fill Name On Check.
                              </div>
                            </div>
                            <!-- form-group.// -->
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="cheque">Cheque No:</label>
                            <input
                              type="text"
                              class="form-control"
                              name="cheque"
                              placeholder=""
                              required=""
                            />
                            <div class="invalid-feedback">
                              Please Fill Cheque Number.
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Payment Date:</label
                            >
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend"
                                  ><i class="fas fa-calendar-check"></i
                                ></span>
                              </div>
                              <input
                                type="text"
                                class="form-control datepicker"
                                id="validationCustomUsername"
                                placeholder="DD/MM/YY"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a date.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Cash Handed Over To:</label
                            >
                            <div class="form-group">
                              <select
                                name=""
                                id=""
                                class="selectpicker form-control"
                              >
                                <option value="" data-icon="fas fa-user">
                                  Center Head
                                </option>
                                <option value="" data-icon="fas fa-school">
                                  Footprint A/C
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->
                        <div class="form-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="validatedCustomFile"
                              >Screenshot of Receipt/Payslip:</label
                            >
                            <div class="invalid-feedback">
                              Example invalid custom file feedback
                            </div>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            class="form-text text-muted"
                            >Only jpg,jpeg,gif,png allowed, Max Size 1
                            MB.</small
                          >
                        </div>
                        <!-- form-group.// -->

                        <button
                          class="subscribe btn btn-primary btn-block"
                          type="button"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <!-- tab-pane.// -->
                    <div class="tab-pane fade" id="nav-tab-bank">
                      <form role="form" class="was-validated">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label for="username">Transferor's Name:</label>
                              <input
                                type="text"
                                class="form-control"
                                name="username"
                                placeholder=""
                                required=""
                              />
                              <div class="invalid-feedback">
                                Please Fill Transferor's Name.
                              </div>
                            </div>
                            <!-- form-group.// -->
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="cheque">Transaction Reference #</label>
                            <input
                              type="text"
                              class="form-control"
                              name="cheque"
                              placeholder=""
                              required=""
                            />
                            <div class="invalid-feedback">
                              Please Fill Transaction Reference.
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Payment Date:</label
                            >
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend"
                                  ><i class="fas fa-calendar-check"></i
                                ></span>
                              </div>
                              <input
                                type="text"
                                class="form-control datepicker"
                                id="validationCustomUsername"
                                placeholder="DD/MM/YY"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a date.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Payment Type:</label
                            >
                            <div class="form-group">
                              <select
                                name=""
                                id=""
                                class="selectpicker form-control"
                              >
                                <option value="NEFT">NEFT</option>
                                <option value="RTGS">RTGS</option>
                                <option value="IMPS">IMPS</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Mobile No:</label
                            >
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a date.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Deposited in Bank:</label
                            >
                            <div class="form-group">
                              <select
                                name=""
                                id=""
                                class="selectpicker form-control"
                              >
                                <option value="">--Select--</option>
                                <option value="Hdfc">HDFC Bank</option>
                                <option value="Kotak">KOTAK Bank</option>
                                <option value="Yes">YES Bank</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->
                        <div class="form-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="validatedCustomFile"
                              >Screenshot of Receipt/Payslip:</label
                            >
                            <div class="invalid-feedback">
                              Example invalid custom file feedback
                            </div>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            class="form-text text-muted"
                            >Only jpg,jpeg,gif,png allowed, Max Size 1
                            MB.</small
                          >
                        </div>
                        <!-- form-group.// -->

                        <button
                          class="subscribe btn btn-primary btn-block"
                          type="button"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <!-- tab-pane.// -->
                    <div class="tab-pane fade show" id="nav-tab-cash">
                      <p class="alert alert-success">
                        Some text success or error
                      </p>
                      <form role="form" class="was-validated">
                        <div class="form-group">
                          <label for="username">Full name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder=""
                            required=""
                          />
                          <div class="invalid-feedback">
                            Please Fill Full Name.
                          </div>
                        </div>
                        <!-- form-group.// -->

                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Payment Date:</label
                            >
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend"
                                  ><i class="fas fa-calendar-check"></i
                                ></span>
                              </div>
                              <input
                                type="text"
                                class="form-control datepicker"
                                id="validationCustomUsername"
                                placeholder="DD/MM/YY"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div class="invalid-feedback">
                                Please choose a date.
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="validationCustomUsername"
                              >Cash Handed Over To:</label
                            >
                            <div class="form-group">
                              <select
                                name=""
                                id=""
                                class="selectpicker form-control"
                              >
                                <option value="" data-icon="fas fa-user">
                                  Center Head
                                </option>
                                <option value="" data-icon="fas fa-school">
                                  Footprint A/C
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- row.// -->

                        <div class="form-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="validatedCustomFile"
                              required
                            />
                            <label
                              class="custom-file-label"
                              for="validatedCustomFile"
                              >Screenshot of Receipt/Payslip:</label
                            >
                            <div class="invalid-feedback">
                              Please Upload Screenshot of Receipt/Payslip
                            </div>
                          </div>
                          <small
                            id="passwordHelpBlock"
                            class="form-text text-muted"
                            >Only jpg,jpeg,gif,png allowed, Max Size 1
                            MB.</small
                          >
                        </div>
                        <!-- form-group.// -->

                        <button
                          class="subscribe btn btn-primary btn-block"
                          type="button"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                    <!-- tab-pane.// -->
                  </div>
                  <!-- tab-content .// -->
                </div>
                <!-- card-body.// -->
              </div>
              <!-- card.// -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ViewInvoice",
};
</script>
<style type="text/css"></style>
